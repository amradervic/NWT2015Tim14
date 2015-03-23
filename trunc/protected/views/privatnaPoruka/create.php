<?php
/* @var $this PrivatnaPorukaController */
/* @var $model PrivatnaPoruka */

$this->breadcrumbs=array(
	'Privatna Porukas'=>array('index'),
	'Create',
);

$this->menu=array(
	array('label'=>'List PrivatnaPoruka', 'url'=>array('index')),
	array('label'=>'Manage PrivatnaPoruka', 'url'=>array('admin')),
);
?>

<h1>Create PrivatnaPoruka</h1>

<?php $this->renderPartial('_form', array('model'=>$model)); ?>