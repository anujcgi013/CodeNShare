using Microsoft.Owin;
using Owin;

[assembly: OwinStartupAttribute(typeof(psAzureAnuj.Startup))]
namespace psAzureAnuj
{
    public partial class Startup
    {
        public void Configuration(IAppBuilder app)
        {
            ConfigureAuth(app);
        }
    }
}
