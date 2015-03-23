<?php
/* @var $this KategorijaController */
/* @var $model Kategorija */

$this->breadcrumbs=array(
	'Kategorijas'=>array('index'),
	'Create',
);

$this->menu=array(
	array('label'=>'List Kategorija', 'url'=>array('index')),
	array('label'=>'Manage Kategorija', 'url'=>array('admin')),
);
?>

<h1>Create Kategorija</h1>

<?php $this->renderPartial('_form', array('model'=>$model)); ?>