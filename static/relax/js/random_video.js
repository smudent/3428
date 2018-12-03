/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
test();
function test()
{
    var videoDiv = document.getElementById("video");
    var rng = Math.floor((Math.random() * 7) + 1);
    videoDiv.innerHTML = "<video style=\"width:100%;height:5%\" controls = \"false\" autoplay> <source src=\""+static_dir+"relax/video/Relax " + rng + ".mp4\" type=\"video/mp4\">; </video>";
}
