menuApp.controller('MainController', ['$scope', function ($scope) {
    $scope.today = new Date();

    $scope.appetizers = [
      {
          name: 'Caprese',
          description: 'Mozzarella, tomatoes, basil, balsmaic glaze.',
          price: 4.95
      },
      {
          name: 'Mozzarella Sticks',
          description: 'Served with marinara sauce.',
          price: 3.95
      },
      {
          name: 'Bruschetta',
          description: 'Grilled bread, garlic, tomatoes, olive oil.',
          price: 4.95
      }
    ];
    $scope.mains = [
     {
      name: 'Lemon Pepper Salmon',
      description: 'Baked Salmon, lemon, black pepper, olive oil.',
      price: 14.25
     },
     {
      name: 'Sizzling Rib-Eye Steak',
      description: 'Rib-Eye Steak, special sauce, potatoes',
      price: 18.99
     },
     {
      name: 'Four Cheese Pizza',
      description: 'Parmesan, blue cheese, gruyere, and mozzarella cheese',
      price: 10.99
     }
    ];
    $scope.sides = [
     {
      name: 'House Salad',
      description: 'Spinach, cranberries, balsamic vinaigrette',
      price: 3.99
     },
     {
      name: 'Ceasar Salad',
      description: 'Romaine Lettuce, tuna, ceasar dressing',
      price: 2.99
     },
     {
      name: 'Veggie Soup',
      description: 'Carrots, celery, onions',
      price: 2.99
     }
     ];

}]);

