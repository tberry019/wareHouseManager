
//Data//
// const packages = [{ heavy: true, priority: false, fragile: false, to: 'Harrington', trackingNumber: '1324kjs' }, { heavy: false, priority: true, fragile: true, to: 'Mark', trackingNumber: '1325sdk' }, { heavy: true, priority: false, fragile: true, to: 'Mick', trackingNumber: 'jffd147' }, { heavy: false, priority: false, fragile: false, to: 'Jake', trackingNumber: 'acdc145' }, { heavy: true, priority: true, fragile: true, to: 'Brittany' }, { heavy: false, priority: true, fragile: false, to: 'Jonesy', trackingNumber: '8081baz' }, { heavy: true, priority: false, fragile: true, to: 'Justin', trackingNumber: 'suz2367' }]

let packages = [
  {
    trackingNumber: '1324kjs',
    heavy: true,
    priority: false,
    fragile: false,
    to: 'Harrington',

  },
  {
    trackingNumber: '1325sdk',
    heavy: false,
    priority: true,
    fragile: true,
    to: 'Mark',

  },
  {
    trackingNumber: 'jffd147',
    heavy: true,
    priority: false,
    fragile: true,
    to: 'Mick',

  },
  {
    trackingNumber: 'acdc145',
    heavy: false,
    priority: false,
    fragile: false,
    to: 'Jake',

  },
  {
    trackingNumber: '',
    heavy: true,
    priority: true,
    fragile: true,
    to: 'Brittany',

  },
  {
    trackingNumber: '8081baz',
    heavy: false,
    priority: true,
    fragile: false,
    to: 'Jonesy',

  },
  {
    trackingNumber: 'suz2367',
    heavy: true,
    priority: false,
    fragile: true,
    to: 'Justin',

  },
]

// let heavyPackages = packages.filter(packages => packages.heavy == 'heavy')

function filterHeavy() {
  let heavyPackages = []
  for (let i = 0; i < packages.length; i++) {
    const package = packages[i];
    if (package.heavy == true) {
      heavyPackages.push(package)
    } console.log(heavyPackages)
  }
  draw(heavyPackages)
}

// NOTE work on after heavy is fixed
function filterPriority() {
  let priorityPackages = []
  for (let i = 0; i < packages.length; i++) {
    const package = packages[i];
    if (package.priority == true) {
      priorityPackages.push(package)
    } console.log(priorityPackages)
  }
  draw(priorityPackages)
}


function draw(heavyPackages) {
  let template = 'Heavy Packages'
  for (let i = 0; i < heavyPackages.length; i++) {
    const package = heavyPackages[i];
    template += /*html*/`<li>${package.to}</li>`
  }

  document.getElementById('packages').innerHTML = template
}

function draw(priorityPackages) {
  let template = 'Priority Packages'
  for (let i = 0; i < priorityPackages.length; i++) {
    const package = priorityPackages[i];
    template += /*html*/`<li>${package.to}</li>`
  }

  document.getElementById('packages').innerHTML = template
}
















