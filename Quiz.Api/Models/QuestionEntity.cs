using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Quiz.Api.Models;

public class QuestionEntity
{
        [Key]
        public int QuestionId { get; set; }

        [Required]
        public required string Question { get; set; }

        [Required]
        public required string Answer { get; set; }

        
        public int QuizId { get; set; }

        [ForeignKey("QuizId")]
        public QuizEntity? Quiz { get; set; }
}
