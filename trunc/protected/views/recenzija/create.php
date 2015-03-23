<?php
/* @var $this RecenzijaController */
/* @var $model Recenzija */

$this->breadcrumbs=array(
	'Recenzijas'=>array('index'),
	'Create',
);

$this->menu=array(
	array('label'=>'List Recenzija', 'url'=>array('index')),
	array('label'=>'Manage Recenzija', 'url'=>array('admin')),
);
?>

<h1>Create Recenzija</h1>

<?php $this->renderPartial('_form', array('model'=>$model)); ?>