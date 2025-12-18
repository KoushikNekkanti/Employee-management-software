using EmsAPi.Model;
using EmsAPi.Services;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace EmsAPi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthController(IAuth ser) : ControllerBase
    {

        [HttpPost]
        public async Task<bool> VerifyDetails(Model.Auth data)
        {
            return await ser.VerifyData(data.UserName, data.Password);
        }
    }
}
