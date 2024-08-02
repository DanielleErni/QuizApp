using Quiz.Api.Models;
using static Quiz.Api.Dto.QuizDto;

namespace Quiz.Api.Mapping
{
    public static class QuizMapper
    {
        public static QuizDetailsDto MapToQuizDetailsDto(this QuizEntity quizEntity)
        {
            return new QuizDetailsDto
            {
                Id = quizEntity.QuizId,
                QuizName = quizEntity.QuizName,
                Quiz = quizEntity.Questions.Select(q => q.MapToQuestionDetailsDto()).ToList()
            };
        }
        
        public static QuizEntity MapToQuizEntity(this CreateQuizDto quizDto)
        {
            return new QuizEntity
            {
                QuizName = quizDto.QuizName,
                Questions = quizDto.Quiz.Select(q => q.MapToQuestionEntity()).ToList()
            };
        }
        // Added method for UpdateQuizDto
        public static QuizEntity MapToQuizEntity(this UpdateQuizDto quizDto, QuizEntity existingEntity)
        {
            existingEntity.QuizName = quizDto.QuizName;

            // Update existing questions and add new ones
            var questionEntities = quizDto.Quiz.Select(q => q.MapToQuestionEntity()).ToList();
            existingEntity.Questions = questionEntities;

            return existingEntity;
        }
    }
}