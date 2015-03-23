<?php
/* @var $this OcjenaController */
/* @var $model Ocjena */

$this->breadcrumbs=array(
	'Ocjenas'=>array('index'),
	'Create',
);

$this->menu=array(
	array('label'=>'List Ocjena', 'url'=>array('index')),
	array('label'=>'Manage Ocjena', 'url'=>array('admin')),
);
?>

<h1>Create Ocjena</h1>

<?php $this->renderPartial('_form', array('model'=>$model)); ?>