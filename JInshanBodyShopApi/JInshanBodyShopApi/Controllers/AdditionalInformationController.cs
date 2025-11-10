using JInshanBodyShopApi.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace JInshanBodyShopApi.Controllers;

[ApiController]
[Route("[controller]")]
public class AdditionalInformationController : ControllerBase
{
    AppDbContext _context;

    public AdditionalInformationController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet]
    [Route("/GetAdditionalInformation")]
    [ProducesResponseType(typeof(List<AdditionalProductInfo>), 200)]
    public async Task<IActionResult> GetAdditionalInformation(Guid productId)
    {
        return Ok(await _context.AdditionalProductInfos.Where(p => p.ProductId == productId).ToListAsync());
    }
    
    [HttpPost]
    public async Task<IActionResult> CreateAdditionalInformation(Guid productId, string name, string information)
    {
        AdditionalProductInfo productInformation = new AdditionalProductInfo
        {
            Id = Guid.NewGuid(),
            InformationName = name,
            Information = information,
            ProductId = productId
        };

        try
        {
            await _context.AdditionalProductInfos.AddAsync(productInformation);
            await _context.SaveChangesAsync();
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            return Problem();
        }
        
        return Ok();
    }

    [HttpPut]
    public async Task<IActionResult> UpdateAdditionalInformation(Guid informationId, string name, string information)
    {
        AdditionalProductInfo? additionalInformation = await _context.AdditionalProductInfos.FindAsync(informationId);
        if (additionalInformation == null)
        {
            return NotFound();
        }
        
        additionalInformation.InformationName = name;
        additionalInformation.Information = information;
        return Ok();
    }
    
    [HttpDelete]
    public async Task<IActionResult> DeleteAdditionalInformation(Guid infoId)
    {
        AdditionalProductInfo? productInformation = await _context.AdditionalProductInfos.FindAsync(infoId);
        if (productInformation == null)
        {
            return NotFound();
        }

        try
        {
            _context.AdditionalProductInfos.Remove(productInformation);
            await _context.SaveChangesAsync();
        }
        catch (Exception e)
        {
            Console.WriteLine(e);
            return Problem();
        }
        
        return Ok();
    }
}