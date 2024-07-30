using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Quiz.Api.Data;
using Quiz.Api.Mapping;
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
        //Get quiz name Only yet
        public async Task<ActionResult<IEnumerable<QuizDetailsDto>>> CheckQuizList()
        {
            var QuizList = await _context.Quiz
                .Include(q => q.Questions)
                .Select(q=> q.MapToQuizDetailsDto())
                .ToListAsync();
            
            return Ok(QuizList);
        }
    }
}