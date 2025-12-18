namespace EmsAPi.Services
{
    public interface IAuth
    {

        Task<bool> VerifyData(string username, string password);
        
    }
}
