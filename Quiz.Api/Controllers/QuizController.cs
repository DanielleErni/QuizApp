using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Quiz.Api.Data;
using Quiz.Api.Mapping;
using Quiz.Api.Models;
using static Quiz.Api.Dto.QuizDto;


namespace Quiz.Api.Controllers
{
    [ApiController]
    [Route("/[controller]")]
    public class QuizController : ControllerBase
    {
        private readonly QuizContext _context;

        public QuizController(QuizContext context)
        {
            _context = context;
        }

        [HttpGet]
        //Get quiz and questions
        public async Task<ActionResult<IEnumerable<QuizDetailsDto>>> CheckQuizList()
        {
            var QuizList = await _context.Quiz
                .Include(q => q.Questions)
                .Select(q=> q.MapToQuizDetailsDto())
                .ToListAsync();
            
            return Ok(QuizList);
        }

        [HttpPost]
        //Create new Quiz
        public async Task<ActionResult<QuizDetailsDto>> CreateQuiz([FromBody] CreateQuizDto quiz)
        {
            if (quiz == null)
            {
                return BadRequest("No data provided.");
            }
            
            var quizEntity = quiz.MapToQuizEntity();

            // Add to context and save changes
            _context.Quiz.Add(quizEntity);
            await _context.SaveChangesAsync();

            // Map back to DTO to return
            var createdQuizDto = quizEntity.MapToQuizDetailsDto();

            return CreatedAtAction(nameof(CreateQuiz), new { id = createdQuizDto.Id }, createdQuizDto);
        }


        [HttpPut("{id}")]
        //Update Quiz
        public async Task<ActionResult<QuizDetailsDto>> UpdateQuiz(int id, [FromBody] UpdateQuizDto quiz)
        {
            if (quiz == null)
            {
                return BadRequest("No data provided.");
            }
            
            var existingQuiz = await _context.Quiz.Include(q => q.Questions).FirstOrDefaultAsync(q => q.QuizId == id);
            if(existingQuiz == null){
                return NotFound($"Quiz with ID {id} not found");
            }

            existingQuiz = quiz.MapToQuizEntity(existingQuiz);
            await _context.SaveChangesAsync();
            var updatedQuizDto = existingQuiz.MapToQuizDetailsDto();

            return Ok(updatedQuizDto);
            
        }

        [HttpDelete("{id}")]
        //Update Quiz
        public async Task<IActionResult> DeleteQuiz(int id)
        {
            if (id <= 0)
            {
                return BadRequest("invalid id provided.");
            }

            await _context.Quiz.Where(q => q.QuizId == id).ExecuteDeleteAsync();

            return Ok("success");
            
        }
    }
}