using Quiz.Api.Models;
using static Quiz.Api.Dto.QuestionDto;

namespace Quiz.Api.Mapping
{
    public static class QuestionMapper
    {
        public static QuestionDetailsDto MapToQuestionDetailsDto(this QuestionEntity questionEntity)
        {
            return new QuestionDetailsDto
            {
                QuestionId = questionEntity.QuestionId,
                Question = questionEntity.Question,
                Answer = questionEntity.Answer
            };
        }
        public static QuestionEntity MapToQuestionEntity(this CreateQuestionDto questionDto)
        {
            return new QuestionEntity
            {
                Question = questionDto.Question,
                Answer = questionDto.Answer
            };
        }
    }
}