import { FacebookFilled, TwitterSquareFilled, InstagramFilled, GithubFilled, LinkedinFilled, MailFilled } from '@ant-design/icons';
import { Button } from 'antd';
const iconStyle = {
  margin: '0 8px',
  fontSize: '150%',
};
const DigitalCard = ( props ) =>
{
  return (
    <div className='container'>
      <div className="shadow-lg p-5 mb-6 rounded" style={ { background: "#23252C", margin: "30px 0" } }>
        <center>
          <div className="card" style={ { width: "20rem" } }>
            <img src="https://i.imgur.com/UvR3hW3.png" className="card-img-top" alt="..." />
            <div className="card-body" style={ props.black ? { background: "#1A1B21", color: "white" } : { background: "#F5F5F5", color: "black" } }>
              <center style={ { marginBottom: '10px' } }>
                <h2>Laura Smith</h2>
                <p style={ { color: "#F3BF99" } }>Frontend Developer</p>
                <small>laurasmith.website</small>
              </center>
              <center style={ { marginBottom: '10px' } }>
                <div className='row'>
                  {
                    props.in ? (
                      <>
                        <div className='col-md-6'>
                          <Button icon={ <MailFilled /> } style={ { marginRight: '20px' } } className='form-control'>Email</Button>
                        </div>
                        <div className='col-md-6'>
                          <Button icon={ <LinkedinFilled /> } style={ { background: "#5093E2" } } className='form-control'>LinkedIn</Button>
                        </div>
                      </>
                    ) : (
                      <>
                        <div className='col-md-12'>
                          <Button icon={ <MailFilled /> } style={ { marginRight: '20px' } } className='form-control'>Email</Button>
                        </div>
                      </>
                    )
                  }

                </div>
              </center>
              <br />
              <br />
              <div style={ { textAlign: 'left' } }>
                <h6>About</h6>
                <small>
                  I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                </small>
                <br />
                <br />
                <h6>Interests</h6>
                <small >
                  Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                </small>
              </div>

            </div>
            <div className="card-footer text-muted" style={ props.black ? { background: "#161619" } : { background: "#D5D4D8" } }>
              <center>
                <FacebookFilled style={ iconStyle } />
                <TwitterSquareFilled style={ iconStyle } />
                <InstagramFilled style={ iconStyle } />
                <GithubFilled style={ iconStyle } />
                <LinkedinFilled style={ iconStyle } />
              </center>
            </div>
          </div>
        </center>


      </div>
    </div>
  )
}
const App = () =>
{
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-md-6'>
            <DigitalCard
              in={ true }
              black={ true }
            />
          </div>
          <div className='col-md-6'>
            <DigitalCard
              black={ true }
            />
          </div>
          <div className='col-md-6'>
            <DigitalCard
              in={ true }
            />
          </div>
          <div className='col-md-6'>
            <DigitalCard />
          </div>
        </div>


      </div>
    </>
  )

};
export default App;