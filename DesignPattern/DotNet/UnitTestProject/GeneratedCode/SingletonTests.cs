using Microsoft.VisualStudio.TestTools.UnitTesting;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Tests
{
    [TestClass()]
    public class SingletonTests
    {
        [TestMethod()]
        public void GetInstanceTest()
        {
            Singleton s1 = Singleton.GetInstance();
            Singleton s2 = Singleton.GetInstance() ;
            Assert.AreEqual<Singleton>(s1, s2);
        }
    }
}