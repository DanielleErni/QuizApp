using static Quiz.Api.Dto.QuestionDto;

namespace Quiz.Api.Dto;

public class QuizDto
{
    public class QuizDetailsDto
        {
            public int Id { get; set; }
            public required string QuizName { get; set; }
            public List<QuestionDetailsDto> Quiz { get; set; } = new List<QuestionDetailsDto>();

        }
    
}
