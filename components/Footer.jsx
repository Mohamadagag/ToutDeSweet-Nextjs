
const Footer = () => {
  return (
    <footer className="footer py-10 px-5 text-base-content border-t-2 mt-1">
  <nav>
    <header className="footer-title text-black">CONTACT US</header> 
    <a className="link link-hover text-black">info@toutdesweet.ae</a>
    <a className="link link-hover text-black">+971 43264473</a>
    <a className="link link-hover text-black">+971 501077848</a>
  </nav> 
  <nav>
    <header className="footer-title text-black">LOCATION</header> 
    <p className=" text-black">shop 14 - block 4</p>
    <p className=" text-black">wasl square - Dubai</p>
  </nav> 
  <nav>
    <header className="footer-title text-black">TERMS & CONDITIONS </header> 
    <p className="text-black max-w-[30ch]">please refer to our  terms and conditions  to know more about orders, payments, refunds...</p>
  </nav> 
  <form>
    <header className="footer-title text-black">Newsletter</header> 
    <fieldset className="form-control">
      <label className="label">
        <span className="label-text text-black">Enter your email address</span>
      </label> 
      <div className="join">
        <input type="text" placeholder="Your Email..." className="input input-bordered w-52 join-item bg-[#9f9f9f]" /> 
        <button className="btn bg-[#5a8080] text-white join-item border-transparent">Subscribe</button>
      </div>
    </fieldset>
  </form>
</footer>
  )
}

export default Footer