using System;
using Microsoft.VisualStudio.TestTools.UnitTesting;

namespace UnitTestProject.GeneratedCode
{
    [TestClass]
    public class AbstractFactoryTests
    {
        [TestMethod]
        public void TestMethod()
        {
            AbstractFactory factory1 = new ConcreteFactory1();
            AbstractFactory factory2 = new ConcreteFactory2();
            factory1.CreateProductA();
            factory1.CreateProductB();
            factory2.CreateProductA();
            factory2.CreateProductB();
            Assert.IsInstanceOfType(factory1.CreateProductA(), typeof(ProductA1));

        }
    }
}
