using Amazon.S3.Model;
using JInshanBodyShopApi.Utils;
using Microsoft.AspNetCore.Mvc;

namespace JInshanBodyShopApi.Controllers;

public class PresignRequest
{
    public string FileName { get; set; } = string.Empty;
    public string ContentType { get; set; } = "application/octet-stream";
}

[ApiController]
[Route("[controller]")]
public class OvhController : ControllerBase
{
    private readonly OvhStorageService _storageService;
    
    public OvhController(OvhStorageService storageService)
    {
        _storageService = storageService;
    }
    
    [HttpPost]
    [ProducesResponseType(typeof(string), 200)]
    public IActionResult GetPresignedUrl([FromBody] PresignRequest request)
    {
        return Ok(_storageService.GetPreSignedUploadUrl(request.FileName, request.ContentType, TimeSpan.FromMinutes(5)));
    }

    [HttpGet("/download")]
    [ProducesResponseType(typeof(string), 200)]
    public async Task<IActionResult> GetPresignedDownloadUrl(string key)
    {
        string url = await _storageService.GetPreSignedDownloadUrl(key);
        return Ok(url);
    }
}