import React from 'react'
import Reviews from '../Images/reviews-img.png'
const HotelReviews = () => {
  return (
    <>

      <div class="row reviews-item">
        <div class="col-lg-1 col-md-1 d-flex justify-content-start">
          <img src={Reviews} alt="Room Image" class="room-img me-3" />
        </div>
        <div class="col-lg-10 col-md-8">
          <div class="row">
            <div class="col-lg-6"><span class="review-rating text-danger"> 5.0 Amazing </span> | Omar Siphron</div>
            <div class="col-lg-6 d-flex justify-content-end"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="20" viewBox="0 0 18 20" fill="none">
              <path d="M1.34427 19.373C1.16102 19.373 0.985273 19.3002 0.855695 19.1706C0.726117 19.041 0.65332 18.8653 0.65332 18.682V1.58662C0.65337 1.40558 0.700838 1.22772 0.790999 1.07073C0.881161 0.913743 1.01087 0.78311 1.16721 0.691838C1.68974 0.388252 2.74258 0.0263672 4.79902 0.0263672C6.40591 0.0263672 8.20324 0.661609 9.78897 1.22171C11.0659 1.67299 12.2721 2.09922 13.0904 2.09922C14.1439 2.09598 15.1861 1.88313 16.1565 1.47304C16.2747 1.42316 16.4033 1.4033 16.531 1.41522C16.6588 1.42714 16.7815 1.47048 16.8884 1.54137C16.9953 1.61226 17.083 1.7085 17.1437 1.82151C17.2043 1.93452 17.2361 2.06078 17.2361 2.18904V11.662C17.2359 11.8299 17.1868 11.9941 17.0948 12.1345C17.0028 12.2749 16.8718 12.3855 16.7179 12.4527C16.3418 12.6172 14.9685 13.1544 13.0904 13.1544C12.0479 13.1544 10.742 12.8461 9.35972 12.5192C7.80594 12.1521 6.19949 11.7725 4.79902 11.7725C3.20681 11.7725 2.39192 12.0135 2.03522 12.1659V18.682C2.03522 18.8653 1.96242 19.041 1.83285 19.1706C1.70327 19.3002 1.52752 19.373 1.34427 19.373Z" fill="#DDD507" />
            </svg></div>
          </div>
          <div class="row">
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
        </div>
      </div>

      <hr />
    </>
  )
}

export default HotelReviews