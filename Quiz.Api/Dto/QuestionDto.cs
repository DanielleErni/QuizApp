namespace Quiz.Api.Dto;

public class QuestionDto
{
    public class QuestionDetailsDto
        {
            public int QuestionId { get; set; }

            public required string Question { get; set; }
            public required string Answer { get; set; }
            
        }
    
}
