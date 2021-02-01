export default {
  title: 'Foundations/Forms'
}

export const Forms = () => ({
  template: `
    <div class="sbdocs-small-container">
      <label class="u-space--bottom">Text Input
          <input type="text" placeholder="here is some placeholder text">
      </label>
      <label class="u-space--bottom">
          Number Input
          <input type="number" value="100">
      </label>
      <label class="u-space--bottom">Password Input
          <input type="password" aria-describedby="passwordHelpText" placeholder="password">
      </label>
      <label class="u-space--bottom">Text Area
          <textarea placeholder="placeholder text"/>
      </label>
      <p>Inline Buttons</p>
      <div class="input-group u-space--bottom">
          <label for="inline-input" class="hide-ally-element">Label</label>
          <input id="inline-input" class="input-group-field" type="number">
          <div class="input-group-button">
              <input type="submit" class="button" value="Go">
          </div>
      </div>
      <label class="u-space--bottom">Single Select Menu
        <select>
            <option value="starbuck">Starbuck</option>
            <option value="husker">Husker</option>
            <option value="hotdog">Hot Dog</option>
            <option value="apollo">Apollo</option>
        </select>
      </label>
      <label class="u-space--bottom">Multiple Select Menu
        <select multiple>
            <option value="showboat">Showboat</option>
            <option value="redwing">Redwing</option>
            <option value="narcho">Narcho</option>
            <option value="hardball">Hardball</option>
        </select>
      </label>
      <fieldset class="u-space--bottom">
          <legend>Radio Buttons</legend>
          <input type="radio" name="pokemon" value="Red" id="pokemonRed" required><label for="pokemonRed">Red</label>
          <input type="radio" name="pokemon" value="Blue" id="pokemonBlue"><label
              for="pokemonBlue">Blue</label>
          <input type="radio" name="pokemon" value="Yellow" id="pokemonYellow"><label for="pokemonYellow">Yellow</label>
      </fieldset>
      <fieldset class="u-space--bottom">
          <legend>Checkboxes</legend>
          <input id="checkbox1" type="checkbox"><label for="checkbox1">Checkbox 1</label>
          <input id="checkbox2" type="checkbox"><label for="checkbox2">Checkbox 2</label>
          <input id="checkbox3" type="checkbox"><label for="checkbox3">Checkbox 3</label>
      </fieldset>
    </div>
  `
})

export const TextareaCharacterCount = () => ({
  data: () => ({
    textarea: '',
    maxCharacters: 10,
  }),
  template: `
    <div>
    <label :class="{'error': maxCharacters-textarea.length < 0}">Textarea with Character Count
      <textarea
        v-model="textarea"
        placeholder="placeholder text"
      />
      <p>{{ maxCharacters - textarea.length }} Characters Remaining</p>
    </label>
    </div>
  `
})

export const DisabledState = () => ({
  template: `
    <label class="disabled">Disabled Input
      <input
      disabled
      aria-disabled="true"
      type="text"
      placeholder="placeholder text"
      >
    </label>
  `
})

export const ErrorState = () => ({
  template: `
    <label class="required error">Error Input
        <input
        required
        aria-required="true"
        type="text"
        placeholder="placeholder text"
        >
        <p class="error">Error text lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
    </label>
  `
})
