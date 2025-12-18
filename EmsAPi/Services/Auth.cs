using Dapper;
using Microsoft.AspNetCore.Identity;
using Microsoft.Data.SqlClient;
using Microsoft.IdentityModel.Tokens;
using System.Data.SqlClient;

namespace EmsAPi.Services
{
    public class Auth(IConfiguration cst) : IAuth
    {
        private SqlConnection connection()
        {
            return new SqlConnection(cst.GetConnectionString("mycon"));
        }

        public async Task<bool> VerifyData(string username, string password)
        {
           
            using var con=connection();
            con.Open();
            const string sql = "SELECT PasswordHash FROM Users WHERE Username = @Username";

           var k= await con.QueryFirstOrDefaultAsync(sql, new {Username=username});
            var hasher = new PasswordHasher<string>();
            var ans=hasher.VerifyHashedPassword("name", password,k );

            return  true;
        }
    }
}
