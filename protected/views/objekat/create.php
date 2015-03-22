<?php
/* @var $this ObjekatController */
/* @var $model Objekat */

$this->breadcrumbs=array(
	'Objekats'=>array('index'),
	'Create',
);

$this->menu=array(
	array('label'=>'List Objekat', 'url'=>array('index')),
	array('label'=>'Manage Objekat', 'url'=>array('admin')),
);
?>

<h1>Create Objekat</h1>

<?php $this->renderPartial('_form', array('model'=>$model)); ?>