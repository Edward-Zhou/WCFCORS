using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Text;
using System.Threading.Tasks;

namespace WCFConApp
{
    class Program
    {
        static void Main(string[] args)
        {
            HttpClient client = new HttpClient();
            HttpResponseMessage wcfResponse = client.GetAsync("http://localhost/WCFCORS/Service1.svc/rest/GetData?value=123").Result;
            HttpContent stream = wcfResponse.Content;
            var data = stream.ReadAsStringAsync();
            Console.WriteLine( data.Result);
            Console.ReadLine();
        }
    }
}
