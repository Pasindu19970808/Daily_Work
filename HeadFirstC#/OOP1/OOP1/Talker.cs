﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Windows.Forms;
namespace OOP1
{
    class Talker
    {
        public static int BlahBlahBlah(string thingToSay, int numberofTimes)
        {
            string finalString = "";
            for (int count = 0; count < numberofTimes; count++)
            {
                finalString = finalString + thingToSay + "\n";
            }
            MessageBox.Show(finalString);
            return finalString.Length;
        }
    }
}
