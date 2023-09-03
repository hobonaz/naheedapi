describe('API Automation Test through cypress',() =>{

    it('Home page Booking Site UI/ API ',() =>{
    
   
    cy.api('POST',  'https://www.booking.com/c360/v1/track',{
        "campaign_id": "booking_home",
        "design_variant": "booking_home",
        "banner_action": [
            {
                "action_index": 0,
                "action_url": "https://www.booking.com/booking-home/index.en-gb.html?label=gen173nr-1BCAEoggI46AdIM1gEaLUBiAEBmAEJuAEXyAEM2AEB6AEBiAIBqAIDuAK39synBsACAdICJGJmNTgyMTkyLWVmMzUtNDM3Yy04OTNmLTQ5NDEzMzJkOTNkYtgCBeACAQ&sid=b4b8c39290be659eab406f53303f32f2&aid=304142",
                "action_text": "Discover Homes",
                "action_type": "CTA_redirect"
            }
        ]
    })
    
    
    })
    })