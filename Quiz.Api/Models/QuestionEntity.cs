using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Quiz.Api.Models;

public class QuestionEntity
{
        [Key]
        public Guid QuestionId { get; set; }

        [Required]
        public required string Question { get; set; }

        [Required]
        public required string Answer { get; set; }

        
        public Guid QuizId { get; set; }

        [ForeignKey("QuizId")]
        public required QuizEntity Quiz { get; set; }
}
