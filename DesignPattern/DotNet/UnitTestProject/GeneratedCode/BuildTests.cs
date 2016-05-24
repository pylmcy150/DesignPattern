using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace UnitTestProject.GeneratedCode
{
    [TestClass]
    public class BuildTests
    {
        [TestMethod]
        public void TestMethod()
        {
            Director d = new Director();
            //构建
            Builder b = new ConcreteBuilder();
            d.Constructor(b);
            Product p = b.GetResult();
            p.Show();

            
        }
    }
}
