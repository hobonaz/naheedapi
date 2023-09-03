describe('API Automation Test through cypress',() =>{

it('Home page Booking Site',{ env: { snapshotOnly: true } },() =>{


 cy.visit('https://www.booking.com/')
 cy.wait(4000)
 cy.api('POST',  'https://www.booking.com/c360/v1/track',{

    "tracker_name": "C360ReactTracker",
    "tracker_type": "Client",
    "tracker_version": "0.1.0"
});
cy.wait(4000)
//cy.get('#cars > .aca0ade214 > .a53cbfa6de').click()
//City
cy.get('.footer-seo-links-to-html-sitemaps > .footer-navigation-links-list > :nth-child(3) > a').click();
//Hotel in Myrtel
cy.get(':nth-child(2) > .block_header > h2 > a').click();
//Select 6 date
cy.wait(4000)
cy.get('[data-date="2023-09-06"]').click();
//Click on 8
cy.wait(4000)
cy.get('[data-date="2023-09-08"]').click();
//Click on search 
cy.wait(4000)
cy.get('.sb-searchbox__button').click()
//See Availability
cy.visit('https://www.booking.com/hotel/us/plantation-resort.html?aid=304142&label=gen173bo-1DCAMoggI46AdIM1gDaLUBiAEBmAExuAEXyAEM2AED6AEB-AECiAIBmAICqAIDuAK0nM2nBsACAdICJGUxYWViZmI0LWMxNDYtNDQ0ZC05ZjQyLTk2NzgzOGYzM2RjYtgCBOACAQ&all_sr_blocks=37514605_102066853_0_0_0;checkin=2023-09-06;checkout=2023-09-08;dest_id=20117718;dest_type=city;dist=0;group_adults=2;group_children=0;hapos=1;highlighted_blocks=37514605_102066853_0_0_0;hpos=1;matching_block_id=37514605_102066853_0_0_0;no_rooms=1;req_adults=2;req_children=0;room1=A%2CA;sb_price_type=total;sr_order=popularity;sr_pri_blocks=37514605_102066853_0_0_0__38281;srepoch=1693666892;srpvid=cf0169a431c500d8;type=total;ucfs=1&#hotelTmpl')
cy.wait(4000)
cy.get('#hcta').click()
//See availability
cy.wait(4000)
cy.get(':nth-child(2) > .xp__dates-inner > .xp__group > .sb-date-field > .sb-searchbox__input > .sb-date-field__icon').click();
//Check in
cy.get('[aria-label="13 September 2023"] > :nth-child(1) > .calendar-day__number').click();
//Check out
cy.get('[aria-label="20 September 2023"] > :nth-child(1) > .calendar-day__number').click();
//Apply changes
cy.wait(4000)
cy.get('.sb-searchbox__button').click()



})
})



