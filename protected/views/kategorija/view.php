<?php
/* @var $this KategorijaController */
/* @var $model Kategorija */

$this->breadcrumbs=array(
	'Kategorijas'=>array('index'),
	$model->idKategorija,
);

$this->menu=array(
	array('label'=>'List Kategorija', 'url'=>array('index')),
	array('label'=>'Create Kategorija', 'url'=>array('create')),
	array('label'=>'Update Kategorija', 'url'=>array('update', 'id'=>$model->idKategorija)),
	array('label'=>'Delete Kategorija', 'url'=>'#', 'linkOptions'=>array('submit'=>array('delete','id'=>$model->idKategorija),'confirm'=>'Are you sure you want to delete this item?')),
	array('label'=>'Manage Kategorija', 'url'=>array('admin')),
);
?>

<h1>View Kategorija #<?php echo $model->idKategorija; ?></h1>

<?php $this->widget('zii.widgets.CDetailView', array(
	'data'=>$model,
	'attributes'=>array(
		'idKategorija',
		'naziv',
	),
)); ?>
