<?php
/* @var $this LogController */
/* @var $model Log */

$this->breadcrumbs=array(
	'Logs'=>array('index'),
	$model->idLog,
);

$this->menu=array(
	array('label'=>'List Log', 'url'=>array('index')),
	array('label'=>'Create Log', 'url'=>array('create')),
	array('label'=>'Update Log', 'url'=>array('update', 'id'=>$model->idLog)),
	array('label'=>'Delete Log', 'url'=>'#', 'linkOptions'=>array('submit'=>array('delete','id'=>$model->idLog),'confirm'=>'Are you sure you want to delete this item?')),
	array('label'=>'Manage Log', 'url'=>array('admin')),
);
?>

<h1>View Log #<?php echo $model->idLog; ?></h1>

<?php $this->widget('zii.widgets.CDetailView', array(
	'data'=>$model,
	'attributes'=>array(
		'idLog',
		'vrijemeLogiranja',
		'ipAdresa',
		'Korisnici_idKorisnik',
	),
)); ?>
