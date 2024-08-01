namespace Quiz.Api.Dto;

public class QuestionDto
{
    public class QuestionDetailsDto
    {
        public int QuestionId { get; set; }

        public required string Question { get; set; }
        public required string Answer { get; set; }
        
    }
    public class CreateQuestionDto
    {
        public required string Question { get; set; }
        public required string Answer { get; set; }
        
    }
    public class UpdateQuestionDto
    {
        public required string Question { get; set; }
        public required string Answer { get; set; }
        
    }
    
}
