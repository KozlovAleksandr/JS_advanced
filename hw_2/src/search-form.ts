import { renderBlock } from './lib'

export function renderSearchFormBlock () {

    function getLastDayOfNextMonth(today: Date) {
        const year = today.getFullYear();
        const month = today.getMonth();
        return new Date(year, month + 2, 1).toJSON().slice(0,10);
    }
  
    const today = new Date();
    const minDay = today.toJSON().slice(0,10);
    const maxDay = getLastDayOfNextMonth(today);
  
    const defaultIn = new Date(minDay);
    defaultIn.setDate(defaultIn.getDate() + 1);
    const defaultInStr = JSON.stringify(defaultIn).slice(1,11)
  
    const defaultOut = new Date(defaultIn);
    defaultOut.setDate(defaultOut.getDate() + 2);
    const defaultOutStr = JSON.stringify(defaultOut).slice(1,11)


    renderBlock(
        'search-form-block',
        `
    <form>
      <fieldset class="search-filedset">
        <div class="row">
          <div>
            <label for="city">Город</label>
            <input id="city" type="text" disabled value="Санкт-Петербург" />
            <input type="hidden" disabled value="59.9386,30.3141" />
          </div>
          <!--<div class="providers">
            <label><input type="checkbox" name="provider" value="homy" checked /> Homy</label>
            <label><input type="checkbox" name="provider" value="flat-rent" checked /> FlatRent</label>
          </div>--!>
        </div>
        <div class="row">
          <div>
            <label for="check-in-date">Дата заезда</label>
            <input id="check-in-date" type="date" value=${defaultInStr} min=${minDay} max=${maxDay} name="checkin" />
          </div>
          <div>
            <label for="check-out-date">Дата выезда</label>
            <input id="check-out-date" type="date" value=${defaultOutStr} min=${minDay} max=${maxDay} name="checkout" />
          </div>
          <div>
            <label for="max-price">Макс. цена суток</label>
            <input id="max-price" type="text" value="" name="price" class="max-price" />
          </div>
          <div>
            <div><button>Найти</button></div>
          </div>
        </div>
      </fieldset>
    </form>
    `
    )
}
