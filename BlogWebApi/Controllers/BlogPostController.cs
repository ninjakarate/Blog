using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace BlogWebApi.Controllers;

[ApiController]
[Route("[controller]")]
public class BlogPostController : ControllerBase
{
    private readonly DataContext _context;

    public BlogPostController(DataContext context)
    {
        _context = context;
    }

    [HttpGet("")]
    public BlogPostListItem[] Get()
    {
        return _context.Posts
            .Select(p => new BlogPostListItem
            {
                Id = p.Id,
                Title = p.Title,
            }).ToArray();
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetPost(int id)
    {
        var post = await _context.Posts.FindAsync(id);

        if (post == null)
        {
            return NotFound();
        }

        return Ok(post);
    }

    [HttpPost("")]
    public async Task<IActionResult> Create(BlogPost post)
    {
        _context.Posts.Add(post);
        await _context.SaveChangesAsync();

        return Ok(post);
    }

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeletePost(int id)
    {
        var post = await _context.Posts.FindAsync(id);
        if (post == null)
        {
            return NotFound();
        }

        _context.Posts.Remove(post);
        await _context.SaveChangesAsync();

        return NoContent();
    }

    [HttpPut("{id}")]
    public async Task<IActionResult> Update(int id, BlogPost newPost)
    {
        if (id != newPost.Id)
        {
            return BadRequest();
        }

        var postExists = await _context.Posts.AnyAsync(p => p.Id == id);

        if(!postExists)
        {
            return NotFound();
        }
    
        _context.Posts.Update(newPost);
        await _context.SaveChangesAsync();           
    
        return NoContent();
    }
}
