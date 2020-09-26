import _15igm from '../../assets/notebooks/7fcd4792a7908e070701d8fb24a00d1f.png'
import _x543ma from '../../assets/notebooks/ccd6e0e75af818db21d12f1cba264cb2.png'
import _a315 from '../../assets/notebooks/notebook-acer-pentium-gold-4gb-500gb-tela-15-6-windows-10-aspire-3-a315-53-p884-55000029.png'

import _s145 from '../../assets/notebooks/1889554a5177856184d679dcb180259d.png'
import _d3xp from '../../assets/notebooks/notebook-dell-core-i5-8265u-8gb-1tb-tela-hd-15-6-linux-inspiron-i15-3583-d3xp-50001437.png'
import _x30 from '../../assets/notebooks/bb137879e5796f5c6005641f09798882.png'

import _an515 from '../../assets/notebooks/200222429a88b72befebf180eedf7b05.png'
import _ody from '../../assets/notebooks/20a6fe2c83b8b159feb59930313c4799.png'
import _ph315 from '../../assets/notebooks/83e7b26d7c77d8d0de0bccb6696412b5.png'

import _muv from '../../assets/notebooks/front_4_22.png'
import _s51 from '../../assets/notebooks/SGNP760XBEXW1_PRD_447_2.png'
import _macb from '../../assets/notebooks/macbook-apple-pro-retina-intel-core-i5-8gb-ssd-128gb-macos-13-3-cinza-espacial-muhn2bz-a_1571255868_gg.png'

const notebooks = {
  low: [
    {
      name: "Lenovo Ideapad S145-15IGM",
      image: _15igm,
      cpu: "Intel Celeron",
      storage: "500GB - HD",
      ram: "4GB",
      gpu: "Intel UHD Graphics 600",
      SO: "Windows 10",
      screen: "15.6” LED HD",
      weight: "1,85kg",
      price: "1.700,00"
    },
    {
      name: "Asus X543MA-GO820T",
      image: _x543ma,
      cpu: "Intel Celeron",
      storage: "500GB - HD",
      ram: "4GB",
      gpu: "Intel HD Graphics 600",
      SO: "Windows 10",
      screen: "15.6” LED HD",
      weight: "1,9kg",
      price: "1.700,00"
    },
    {
      name: "Acer Aspire 3 A315-53-P884",
      image: _a315,
      cpu: "Pentium Gold",
      storage: "500GB - HD",
      ram: "4GB",
      gpu: "Intel HD Graphics 610",
      SO: "Windows 10",
      screen: "14' LED Full HD",
      weight: "2,1kg",
      price: "1.799,00"
    }
  ],
  medium: [
    {
      name: "Lenovo Ideapad S145-15IWL",
      image: _s145,
      cpu: "Intel Core i5",
      storage: "1TB - HD",
      ram: "8GB",
      gpu: "Intel UHD Graphics 620",
      SO: "Windows 10",
      screen: "15.6 LED HD",
      weight: "1,85kg",
      price: "2.600,00"
    },
    {
      name: "Dell Inspiron I15-3583-D3XP",
      image: _d3xp,
      cpu: "Intel Core i5",
      storage: "1TB - HD",
      ram: "8GB",
      gpu: "Intel UHD Graphics 620",
      SO: "Linux",
      screen: "15.6 LED HD",
      weight: "2.03kg",
      price: "2.800,00"
    },
    {
      name: "Samsung Expert X30",
      image: _x30,
      cpu: "Intel Core i5",
      storage: "1TB - HD",
      ram: "8GB",
      gpu: "Intel UHD Graphics 620",
      SO: "Windows 10",
      screen: "15.6 LED HD",
      weight: "1,95kg",
      price: "2.900,00"
    }
  ],
  high: [
    {
      name: "Acer Aspire Nitro 5 AN515-51-71A7",
      image: _an515,
      cpu: "Intel Core i7",
      storage: "1TB(HD) - 128GB(SSD M.2)",
      ram: "8GB",
      gpu: "GTX 1050 - 4GB",
      SO: "Endless OS",
      screen: "15,6 IPS Full HD",
      weight: "2.7kg",
      price: "4.100,00"
    },
    {
      name: "Samsung Odyssey",
      image: _ody,
      cpu: "Intel Core I5",
      storage: "1TB(HD) - 128GB(SSD M.2)",
      ram: "8GB",
      gpu: "GTX1050 - 4GB",
      SO: "Windows 10",
      screen: "15,6 Full HD",
      weight: "2.52kg",
      price: "4.300,00"
    },
    {
      name: "Acer Predator Helios 300 PH315-52-748U",
      image: _ph315,
      cpu: "Intel Core I7 9750H",
      storage: "128GB (SSD) - 1TB (HD)",
      ram: "16GB",
      gpu: "RTX 1660ti - 6GB",
      SO: "Windows 10",
      screen: "15,6 IPS Full HD",
      weight: "2.4kg",
      price: "6.900,00"
    }
  ],
  ultra: [
    {
      name: "AVELL A62 MUV",
      image: _muv,
      cpu: "Intel Core I7",
      storage: "512GB SSD",
      ram: "16GB",
      gpu: "GTX 1650 4GB",
      SO: "Windows 10",
      screen: "15,6 Full HD",
      weight: "2.1kg",
      price: "6.300,00"
    },
    {
      name: "Samsung Style S51",
      image: _s51,
      cpu: "Intel Core i7",
      storage: "256GB SSD",
      ram: "16GB",
      gpu: "GTX 1650 4GB",
      SO: "Windows 10",
      screen: "15,6 IPS Full HD",
      weight: "1.29kg",
      price: "6.700,00"
    },
    {
      name: "Macbook Pro MUHN2BZ/A",
      image: _macb,
      cpu: "Intel Core I5",
      storage: "128GB SSD",
      ram: "8GB",
      gpu: "Intel Iris Plus 645",
      SO: "macOS",
      screen: "13,3 Retina",
      weight: "1.37kg",
      price: "9.000,00"
    }
  ]
}

export default notebooks