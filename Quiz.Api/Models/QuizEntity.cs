using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Quiz.Api.Models;

public class QuizEntity
{
    [Key]
    public Guid QuizId { get; set; }

    [Required]
    public required string QuizName { get; set; }

    public ICollection<QuestionEntity> Questions {get; set;} = new List<QuestionEntity>();
}
