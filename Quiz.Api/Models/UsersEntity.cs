using System.ComponentModel.DataAnnotations;

namespace Quiz.Api.Models
{
    public class UsersEntity
    {
        [Key]
        public Guid Id { get; set; }

        [Required]
        public required string Username { get; set; }

        [Required]
        public required string Password { get; set; }

        [Required]
        public required string Role { get; set; }
    }
}