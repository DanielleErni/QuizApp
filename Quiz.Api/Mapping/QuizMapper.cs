using Quiz.Api.Dto;
using Quiz.Api.Models;

namespace Quiz.Api.Mapping
{
    public static class QuizMapper
    {
        public static QuizDto.QuizDetailsDto MapToQuizDetailsDto(this QuizEntity quizEntity)
        {
            return new QuizDto.QuizDetailsDto
            {
                Id = quizEntity.QuizId,
                QuizName = quizEntity.QuizName,
                Quiz = quizEntity.Questions.Select(q => q.MapToQuestionDetailsDto()).ToList()
            };
        }
    }
}