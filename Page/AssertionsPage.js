exports.AssertionsPage=class AssertionsPage{
  constructor(page){
    this.page=page;
    this.row1=page.locator("//td[contains(text(),'Learn Selenium')]");
  } 
  
  async readDataFromRow(){
    let rowData=await this.row1.textContent();
    return rowData;
  }
}