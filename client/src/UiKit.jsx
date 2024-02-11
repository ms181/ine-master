import img from "./assets/temp/card-img.jpg";
import Login from "./components/Login.jsx";

export default function UiKit() {
  return (
    <div>
      <div className="p-10 border-b-2">
        <h1> Heading </h1>
        <h2> Heading </h2>
        <h3> Heading </h3>
        <h4> Heading </h4>
        <h5> Heading </h5>
        <h6> Heading </h6>
        <p className="text-body-1">body content 1</p>
        <p className="text-body-2">body content 2</p>
        <p className="text-caption">caption</p>
        <a href="this is a link">this is a link</a>
      </div>
      <div className="p-10 border-b-2">
        <h3>Buttons</h3>
        <br />
        <h4>Colors</h4>
        <div className="my-2 gap-10 flex flex-wrap">
          <button className="btn btn-primary">primary</button>
          <button className="btn btn-secondary">secondary</button>
          <button className="btn btn-neutral">neutral</button>
          <button className="btn btn-danger">danger</button>
        </div>
        <br />
        <h4>Sizes</h4>
        <div className="my-2 gap-10 flex flex-wrap items-center">
          <button className="btn-lg btn btn-primary">Size lg</button>
          <button className="btn btn-primary">Size Normal</button>
          <button className="btn-sm btn btn-primary">Size sm</button>
          <button className="btn-xs btn btn-primary">Size xs</button>
        </div>
      </div>
      <div className="p-10 border-b-2">
        <h3>Lists</h3>
        <br />
        <h4 className="mb-2">Ordered List</h4>
        <ol>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ol>
        <br />
        <h4 className="mb-2">Unordered List</h4>
        <ul>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
          <li>Coffee</li>
          <li>Tea</li>
          <li>Milk</li>
        </ul>
      </div>
      <div className="p-10 border-b-2">
        <table>
          <thead>
            <tr>
              <th>id</th>
              <th>first name</th>
              <th>last name</th>
              <th>email address</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>Stephannie</td>
              <td>Oby</td>
              <td>soby0@google.es</td>
            </tr>
            <tr>
              <td>2</td>
              <td>Bill</td>
              <td>Blowick</td>
              <td>bblowick1@google.com.au</td>
            </tr>
            <tr>
              <td>3</td>
              <td>Cynthea</td>
              <td>Loughran</td>
              <td>cloughran2@dailymail.co.uk</td>
            </tr>
            <tr>
              <td>4</td>
              <td>Aviva</td>
              <td>Crookes</td>
              <td>acrookes3@adobe.com</td>
            </tr>
            <tr>
              <td>5</td>
              <td>Rosemonde</td>
              <td>Beiderbeck</td>
              <td>rbeiderbeck4@spiegel.de</td>
            </tr>
            <tr>
              <td>6</td>
              <td>Nert</td>
              <td>Muglestone</td>
              <td>nmuglestone5@slate.com</td>
            </tr>
            <tr>
              <td>7</td>
              <td>Rodrick</td>
              <td>Ondracek</td>
              <td>rondracek6@dyndns.org</td>
            </tr>
            <tr>
              <td>8</td>
              <td>Alethea</td>
              <td>Stitwell</td>
              <td>astitwell7@sohu.com</td>
            </tr>
            <tr>
              <td>9</td>
              <td>Arleen</td>
              <td>Lavis</td>
              <td>alavis8@ucla.edu</td>
            </tr>
            <tr>
              <td>10</td>
              <td>Adair</td>
              <td>Fylan</td>
              <td>afylan9@who.int</td>
            </tr>
            <tr>
              <td>11</td>
              <td>Doralynn</td>
              <td>Coppock.</td>
              <td>dcoppocka@google.com.hk</td>
            </tr>
            <tr>
              <td>12</td>
              <td>Evie</td>
              <td>Smithson</td>
              <td>esmithsonb@trellian.com</td>
            </tr>
            <tr>
              <td>13</td>
              <td>Justina</td>
              <td>Pardie</td>
              <td>jpardiec@dailymotion.com</td>
            </tr>
            <tr>
              <td>14</td>
              <td>Kailey</td>
              <td>Love</td>
              <td>kloved@livejournal.com</td>
            </tr>
            <tr>
              <td>15</td>
              <td>Samuele</td>
              <td>Gedge</td>
              <td>sgedgee@homestead.com</td>
            </tr>
            <tr>
              <td>16</td>
              <td>Odell</td>
              <td>Goldston</td>
              <td>ogoldstonf@cisco.com</td>
            </tr>
            <tr>
              <td>17</td>
              <td>Dominic</td>
              <td>Srutton</td>
              <td>dsruttong@shinystat.com</td>
            </tr>
            <tr>
              <td>18</td>
              <td>Fonsie</td>
              <td>Harnwell</td>
              <td>fharnwellh@hugedomains.com</td>
            </tr>
            <tr>
              <td>19</td>
              <td>Estrella</td>
              <td>Ziemsen</td>
              <td>eziemseni@feedburner.com</td>
            </tr>
            <tr>
              <td>20</td>
              <td>Terrance</td>
              <td>Rolfs</td>
              <td>trolfsj@nih.gov</td>
            </tr>
            <tr>
              <td></td>
              <td>&nbsp</td>
              <td>&nbsp</td>
              <td>&nbsp</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="p-10 border-b-2">
        <form className="form bg-slate-200 rounded-3xl">
          <h3>Form title</h3>
          <div className="form-group">
            <label for="exampleInputEmail1" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" className="text-caption">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div className="form-group">
            <label for="exampleInputPassword1">Password</label>
            <input
              type="password"
              className="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <div className="flex gap-2 mb-2 ">
            <input type="checkbox" id="exampleCheck1" />
            <label className="text-body-2" for="exampleCheck1">
              Check me out
            </label>
          </div>
          <button type="submit" className="btn btn-primary mt-4">
            Submit
          </button>
        </form>
      </div>
      <div className="p-10 border-b-2">
        <h2>Card</h2>
        <div className="card">
          <div className="image">
            <img src={img} alt="" />
          </div>
          <div className="content">
            <h4>This is a card</h4>
            <p className="body-content-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum
              atque mollitia a temporibus minima earum, quis maiores
              consequuntur quisquam sed.
            </p>
            <div className="button-group">
              <button className="btn btn-danger">Cancel</button>
              <button className="btn btn-primary">Send</button>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/3 border-b-2">
        <br />
        <h2>Vertical Card</h2>
        <div className="card card-vertical">
          <div className="imag">
            <img src={img} alt="" />
          </div>
          <div className="content">
            <h3>This is a card</h3>
            <p className="body-content-1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem
              sapiente mollitia nobis, eaque praesentium fugit quibusdam
              pariatur et laudantium voluptas.
            </p>
            <div className="button-group">
              <button className="btn btn-danger">Cancel</button>
              <button className="btn btn-primary">Send</button>
            </div>
          </div>
        </div>
        <br />
        <br />
      </div>
    </div>
  );
}
