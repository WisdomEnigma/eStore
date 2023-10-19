import Image from 'next/image'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="Desktop1 w-96 h-96 relative bg-white">
          <div className="Rectangle1 w-96 h-96 left-[316px] top-[101px] absolute shadow justify-center items-center inline-flex">
              <img className="Rectangle1 w-96 h-96 rounded-full" src="man-in-pool-enjoy-music.png" />
          </div>
        <div className="DieHard left-[630px] top-[370px] absolute text-teal-700 text-5xl font-normal font-['Inter']">Die hard Saviour</div>
        <div className="Passion left-[122px] top-[695px] absolute text-green-900 text-5xl font-normal font-['Jim Nightshade']">Passion</div>
        <div className="Rebellious left-[-250px] top-[520px] absolute text-red-600 text-5xl font-normal font-['Homemade Apple']">Rebellious</div>
        <div className="Seductive left-[200px] top-[36px] absolute text-lime-500 text-5xl font-normal font-['Homemade Apple']">Seductive</div>
        <div className="Magician left-[-150px] top-[50px] absolute text-fuchsia-600 text-5xl font-normal font-['Irish Grover']">Magician</div>
        <div className="Rectangle2 w-96 h-96 left-[-316px] top-[120px] absolute shadow justify-center items-center inline-flex">
              <img className="Rectangle2 w-96 h-96 rounded-full" src="Rebellious-man.png" />
          </div>
        <div className="Rectangle3 w-96 h-96 left-[416px] top-[820px] absolute shadow justify-center items-center inline-flex">
              <img className="Rectangle3 w-96 h-96 rounded-full" src="passioniate-women.png" />
          </div>
          <div className="Rectangle4 w-80 h-80 left-[316px] top-[101px] absolute">
              <div className="Rectangle4 w-96 h-96 left-[-550px] top-[800px] absolute text-black-600 text-5xm font-normal font-['Irish Grover']">
                  We are alchemist & rebels. We build great products that will make your moments more special, more phenomenal and elevate your moment experience beyond horizons.
                  A sensible touch is more phenomenal experience, that's your experience make our products valuable.  
              </div>
          </div>
          <div className="Rectangle5 w-96 h-96 left-[-400px] top-[1400px] absolute shadow justify-center items-center inline-flex">
              <img className="Rectangle5 w-96 h-96 rounded-full" src="wisdomenigma-inc.jpg" />
              <div className="Rectangle5 w-96 h-96 left-[450px] top-[200px] absolute text-black-600 text-5xm font-normal font-['Irish Grover']">
                  Wisdomenigma Inc &#169; 2023
              </div>
          </div>
          <div className="Rectangle6 w-120 h-120 left-[-350px] top-[2000px] absolute">
              <img className="Rectangle6 w-90 h-90 " src="song_search.png" />
              <div className="Rectangle6 w-96 h-96 left-[450px] top-[200px] absolute text-black-600 text-5xm font-normal font-['Irish Grover']">
                  <ul>
                    <li className=' w-80 h-80 left-[450px] top-[-100px] absolute'> * Music Studio  &#127897; </li>
                    <li className=' w-80 h-80 left-[450px] top-[-150px] absolute'> * No Music Player &#127926;  </li>
                    <li className=' w-80 h-80 left-[450px] top-[-50px] absolute'> * Emotion Detection &#128525; </li>
                  </ul>
                  <div className="Read1 w-96 h-20 left-[500px] top-[1px] absolute text-teal-600" >
                    <a  href='https://github.com/WisdomEnigma/Roombot' title='visit the site'> Read more </a>
                  </div>
              </div>
          </div>
          <div className="Rectangle7 w-120 h-120 left-[-350px] top-[2700px] absolute">
              <img className="Rectangle7 w-90 h-90 " src="prompt.png" />
              <div className="Rectangle7 w-96 h-96 left-[450px] top-[200px] absolute text-black-600 text-5xm font-normal font-['Irish Grover']">
                  <ul>
                    <li className=' w-80 h-80 left-[450px] top-[-100px] absolute'> * 2x time Fast  &#9202; </li>
                    <li className=' w-80 h-80 left-[450px] top-[-150px] absolute'> * Easy to interact &#128433;  </li>
                    <li className=' w-80 h-80 left-[450px] top-[-50px] absolute'> * Task Efficiency 80% &#129409; </li>
                  </ul>
                  <div className="Read2 w-96 h-20 left-[500px] top-[1px] absolute text-teal-600" >
                    <a  href='https://github.com/WisdomEnigma/Roombot' title='visit the site'> Read more </a>
                  </div>
              </div>
          </div>
          <div className="Rectangle8 w-120 h-120 left-[-350px] top-[3200px] absolute">
            <div className="Rectangle8 w-96 h-96 left-[450px] top-[200px] absolute text-black-600 text-5xm font-normal font-['Irish Grover']">
                <a className='text-teal-600'  href='https://github.com/ali2210/WizDwarf' title='furthermore'> WizDwarf </a> &
                <a className='text-teal-600' href='https://github.com/ali2210/happysnake' title='furthermore'> HappySnake </a> elevate your productivity 
              </div>
          </div>
      </div>
    </main>
  )
}
