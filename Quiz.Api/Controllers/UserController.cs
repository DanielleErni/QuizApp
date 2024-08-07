﻿using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Quiz.Api.Data;
using Quiz.Api.Dto;
using Quiz.Api.Models;

namespace Quiz.Api.Controllers
{
    [ApiController]
    [Route("/[controller]")]
    public class UserController : ControllerBase
    {
        private readonly QuizContext _context;

        public UserController(QuizContext context)
        {
            _context = context;
        }

        [HttpPost]
        public async Task<ActionResult<IEnumerable<UsersEntity>>> CheckUserCred([FromBody] UserDto user)
        {
            if (user == null)
            {
                return BadRequest("No user provided.");
            }
            var userData = await _context.Users
                                    .FirstOrDefaultAsync(u => EF.Functions.Collate(u.Username, "SQL_Latin1_General_CP1_CS_AS") == user.Username 
                                       && u.Password == user.Password);
            if(userData==null){return Unauthorized("Credentials Error");}
            


            return Ok(userData.Role);
        }
    }
}