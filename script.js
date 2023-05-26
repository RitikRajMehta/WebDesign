var data=[
  ["1.","Bihar","Patna","Phagu Chauchan","Nitish Kumar"],
  ["2.","Chhattisgarh","Raipur","Anusuiya Uikey","Bhupesh Bhagel"],
  ["3.","Goa","Panji","PS Sreedharan Pillai","Pramod Saswant"],
  ["4.","Gujarat","Gandhinagar","Acharya Devvrat","Vijay Rupani"],
  ["5.","Andhra Pradesh","Amaravati","Biswabhushan Harichandan","Y.S jagan Mohan Reddy"],
  ["6.","Arunachal Pradesh","Itanagar","Brigadier B.D B.D Mishra","Prema Khandu"],
  ["7.","Assam","Dispur","Jagdish Mukhi","Himanta Biswa Sharma"],
  ["8.","Haryana","Chandigarh","Bandaru Dattatreya","Manohar Lal Kattar"],
  ["9.","Himachal Pradesh","Shimla","Rajendra Vishwanath Arlekar","JAi Ram Thakur"],
  ["10.","Jharkhand","Ranchi","Ramesh Bais","Hemant Soren"],
  ["11.","Karnataka","Bengaluru","Thawar Chand Gehlot","Sri Basavaraj Bommai"],
  ["12.","Kerala","Thiruvananthpuram","Arif Mohammed Khan","Pinarayi Vijayan"],
  ["13.","Madhya Pradesh","Bhopal","Mangubhai Changanbhai Patel","Shivraj Singh Chohan"],
  ["14.","Maharashtra","Mumbai","Bhagat Singh Koshyari","Uddhav Thackeray"],
  ["15.","Manipur","Imphal","Shri La. Ganesan","N. Biren Singh"],
  ["16.","Meghalaya","Shillong","Satya Pal Malik","Conrad Kongkal Sangma"],
  ["17.","Mizoram","Aizwal","Dr. Kambhampati Haribabu","Zoramthanga"],
  ["18.","Nagland","Kohima","R.N Ravi","Neiphiu Rio"],
  ["19.","Odisha","Bhubneshwar","Prof. Ganeshi Lal Mathur","Naveen Patnaik"],
  ["20.","Punjab","Chandhigarh","Shri Banwarilal Puohit","Captain Amrinder Singh"],
  ["21.","Rajasthan","Jaipur","Kalraj Mishra","Ashok Gehlot"],
  ["22.","Sikkim","Gangtok","Ganga Prasad","Prem Singh Tamang(PS Golay)"],
  ["23.","Tamil Nadu","Chennai","Banwarilal Purohit","M.K. Stalin"],
  ["24.","Telangana","Hyderabad","Dr Tamilisai Soundararajan","K. Chandrashekhar Rao"],
  ["25.","Tripura","Agartala","Satyadev Narayan Arya","Biplab Kumar Deb"],
  ["26.","Uttar Pradesh","Lucknow","Anandiben Patel","Yogi Adityanath"],
  ["27.","Uttrakhand","Dehradun","Baby Rani Maurya","Shri Pushkar Singh Dhami"],
  ["28.","West Bengal","Kolkata","Jagdeep Dhankar","Mamata Banerjee"],
];
function displayData()
{
  var tbody=document.getElementById("capitalsTableBody");
   for(let i=0;i<data.length;i++)
   {
      
      let row=document.createElement("tr");
      for(let j=0;j<data[i].length;j++)
      {
          let td=document.createElement("td");
          let textnode=document.createTextNode(data[i][j]);
          // alert(sdata);
          td.append(textnode);
          row.append(td);
      }
      tbody.append(row);
   }   

}