using Amazon.S3;
using Amazon.S3.Model;

namespace JInshanBodyShopApi.Utils;

public class OvhStorageService
{
    private readonly IAmazonS3 _s3Client;
    private readonly string _bucketName = "jinshanobjects";
    private readonly IConfiguration _config;
    
    public OvhStorageService(IConfiguration appConfig)
    {
        _config = appConfig;
        var config = new AmazonS3Config
        {
            ServiceURL = "https://s3.eu-west-par.io.cloud.ovh.net/",
            ForcePathStyle = true,
        };
        
        _s3Client = new AmazonS3Client(appConfig.GetValue<string>("AwsAccessKeyId"), appConfig.GetValue<string>("AwsSecretAccessKey"), config);
    }
    
    public string GetPreSignedUploadUrl(string fileName, string contentType, TimeSpan validFor)
    {
        var request = new GetPreSignedUrlRequest
        {
            BucketName = _bucketName,
            Key = fileName,
            Verb = HttpVerb.PUT,
            Expires = DateTime.UtcNow.Add(validFor),
            ContentType = contentType
        };

        var url = _s3Client.GetPreSignedURL(request);
        return url;
    }

    public async Task<string> GetPreSignedDownloadUrl(string key)
    {
        var request = new GetPreSignedUrlRequest {
            BucketName = _bucketName,
            Key = key,
            Expires = DateTime.UtcNow.AddMinutes(1)
        };

        string url;
        try
        {
            var response = await _s3Client.GetObjectMetadataAsync(_bucketName, key);
        }
        catch (AmazonS3Exception e)
        {
            return String.Empty;
        }
        
        try
        {
            url = await _s3Client.GetPreSignedURLAsync(request);
        }
        catch (ArgumentException)
        {
            url = String.Empty;
        }
        
        return url;
    }
}