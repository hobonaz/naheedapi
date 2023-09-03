export class BookingFlow{
    OpenURL(Booking){
        return cy.visit(Booking);
    }
   stays(){
        //Click on Lahore
        cy.get('.a5761ae4af').type('Lahore');
        cy.contains('Lahore').click();
        //Click on Date sep
        cy.get(':nth-child(1) > .eb03f3f27f > tbody > :nth-child(2) > :nth-child(4) > .cf06f772fa').click()
        //Sign up Ad
        cy.wait(4000)
        cy.get('.ffd93a9ecb > .abcc616ec7 > .a83ed08757').click();
        //Price
        cy.get('div#search_results_table div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(3) > div:nth-child(2) > div > div.a68bfa09c2 > a > span.e4adce92df').click();
        //Select button
        cy,get('div#search_results_table div:nth-child(3) > div:nth-child(1) > div:nth-child(2) > div > div:nth-child(3) > div:nth-child(2) > div > div.a68bfa09c2 > a > span.e4adce92df').click();
        
       
    }
  
}
export default BookingFlow