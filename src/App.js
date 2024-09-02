import './App.css';
import "@fontsource/mulish";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import ContentFrame from './contentFrame';

function App() {
  return (
    <div id="App">
      <div className='head-title'>
        <h1 className="container-title">НАШИ ПРЕИМУЩЕСТВА</h1>
      </div>
      <div className="container">
        <div className="row">
          <ContentFrame
            title="БОЛЬШОЙ ВЫБОР"
            paragraph="В НАШЕМ МЕНЮ БОЛЕЕ 80 ПОЗИЦИЙ ИНДИЙСКОЙ КУХНИ НА ВЫБОР И ЭТО ТОЛЬКО НАЧАЛО."
            frame453="frame453"
            frameOneImg="frameOneImg"
          >
            <div className="rectangle"></div>
            <img src='images/img1.png' className='imgOneAlign' />
            <img src='images/img15.png' className='imgFifteenAlign' />
          </ContentFrame>
          <div className="col-lg-6">
            <div className='row'>
              <div className='col-sm-3'>
                <div className='frameTwo'>
                  <img src='images/img14.png' className='imgFourteenAlign' />
                  <img src='images/img13.png' className='imgThirteenAlign' />
                </div>
              </div>
              <div className='col-sm-3'>
                <img src='images/img9.png' className='imgNineAlign' />
                <div className='buildImgFrameTwo'>
                  <div className='vector'></div>
                  <div className='vectorText'>80+
                    блюд</div>
                </div>
              </div>
              <div className='col-sm-3'>
                <img src='images/img2.png' className='imgTwonSecondPartAlign' />
                <img src='images/img10.png' className='imgTenAlign' />
                <img src='images/img2.png' className='imgTwonThirdPartAlign' />
              </div>
              <div className='col-sm-3'>
                <img src='images/img12.png' className='imgThirteenAlign' />
                <img src='images/img2.png' className='imgTwonAlign' />
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <div id='frameOne'>
              <div className='frameThreeImg'>
                <div className='triangle'></div>
                <img src='images/img17.png' className='imgSeventeenAlign' />
                <img src='images/img16.png' className='imgSixteenAlign' />
                <button className='button'>В КОРЗИНУ</button>
                <div className='lineOne'></div>
                <div className='lineTwo'></div>
                <div className='lineThree'></div>
                <div className='lineFour'></div>
                <img src='images/img18.png' className='imgEighteenAlign' />
              </div>
            </div>
          </div>
          <ContentFrame
            title="НИЗКИЕ ЦЕНЫ"
            paragraph="ПО СРАВНЕНИЮ С КОНКУРЕНТАМИ, НАШИ ЦЕНЫ ВАС ПРИЯТНО УДИВЯТ."
            frame453="frame453"
          />
        </div>
        <div className="row">
          <ContentFrame
            title="РЯДОМ С МЕТРО"
            paragraph="МЫ НАХОДИМСЯ В 5 МИНУТАХ ПУТИ ОТ МЕТРО ХОРОШЁВСКАЯ (ТЦ “ХОРОШО”)."
            frame453="frame453"
          >
            <div class="circle"></div>
          </ContentFrame>
          <div className="col-lg-6">
            <div className='row'>
              <div className='col-sm-3'>
                <div className='frameTwo'>
                  <img src='images/img2.png' className='imgFourteenAlign' />
                  <img src='images/img8.png' className='imgThirteenAlign' />
                </div>
              </div>
              <div className='col-sm-3'>
                <img src='images/img3.png' className='imgNineAlign' />
                <img src='images/img5.jpg' className='imgFiveAlign' />
              </div>
              <div className='col-sm-3'>
                <img src='images/img2.png' className='imgTwonSecondPartAlign' />
                <div className='buildImgFrameTwo'>
                  <img src='images/img4.png' className='imgFourAlign' />
                  <div className='walkerIconText'>5
                    мин.</div>
                </div>
                <img src='images/img2.png' className='imgTwonThirdPartAlign' />
              </div>
              <div className='col-sm-3'>
                <img src='images/img7.png' className='imgThirteenAlign' />
                <img src='images/img6.jpg' className='imgTwonAlign' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
