<?php

namespace \Demo;

class Demo {
  private $data = array();

  public function __constructor($test) {
    echo 'Test ' . $test;
  }

  public function __set($variable, $value){
      echo 'Setting ' . $variable . ' to ' . $value;
      $this->data[$variable] = $value;
  }

  public function __get($variable){
      if (isset($this->data[$variable])) {
          return $this->data[$variable];
      } else {
          die('Unknown variable.');
      }
      $this->__set(bla, blub);
  }

  public function jsonSerialize() {
      return [
          'Display' => $this->display,
          'MandatoryFields' => $this->display
      ];
  }
}

class Site {
  public static function relativeTime(){
      return 'Yesterday';
  }
}

Site::relativeTime();

$d = new Demo;
// Set a non-existent variable
$d->test = 'Test Variable';
// Get what we just stored
echo $d->test;
// Get a non-existant variable
echo $d->testFail;

class BaseClass {
  function __construct() {
      print "In BaseClass constructor\n";
  }
}

class SubClass extends BaseClass {
  function __construct() {
      parent::__construct();
      print "In SubClass constructor\n";
  }
}

class OtherSubClass extends BaseClass {
  // inherits BaseClass's constructor
}

// In BaseClass constructor
$obj = new BaseClass();

// In BaseClass constructor
// In SubClass constructor
$obj = new SubClass();

// In BaseClass constructor
$obj = new OtherSubClass();

?>
