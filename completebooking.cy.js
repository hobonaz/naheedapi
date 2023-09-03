describe('API Automation Test through cypress',() =>{

    it('Booking flow',() =>{
    
     cy.api('POST', 'https://collector-pxikkul2rm.px-cloud.net/api/v2/collector')
    })
})