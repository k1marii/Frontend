function createStack() {
    let items = [];
  
    return {
      push: function(element) {
        items.push(element);
      },
  
      pop: function() {
        if (this.isEmpty()) {
          return "Стек пуст";
        }
        return items.pop();
      },
  
      peek: function() {
        if (this.isEmpty()) {
          return "Стек пуст";
        }
        return items[items.length - 1];
      },

      isEmpty: function() {
        return items.length === 0;
      },
  
      size: function() {
        return items.length;
      },
  
      clear: function() {
        items = [];
      }
    };
  }
  
  const stack = createStack();

  