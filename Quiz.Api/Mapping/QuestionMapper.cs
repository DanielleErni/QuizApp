using Quiz.Api.Dto;
using Quiz.Api.Models;

namespace Quiz.Api.Mapping
{
    public static class QuestionMapper
    {
        public static QuestionDto.QuestionDetailsDto MapToQuestionDetailsDto(this QuestionEntity questionEntity)
        {
            return new QuestionDto.QuestionDetailsDto
            {
                QuestionId = questionEntity.QuestionId,
                Question = questionEntity.Question,
                Answer = questionEntity.Answer
            };
        }
    }
}