<?php
/* @var $this KategorijaController */
/* @var $data Kategorija */
?>

<div class="view">

	<b><?php echo CHtml::encode($data->getAttributeLabel('idKategorija')); ?>:</b>
	<?php echo CHtml::link(CHtml::encode($data->idKategorija), array('view', 'id'=>$data->idKategorija)); ?>
	<br />

	<b><?php echo CHtml::encode($data->getAttributeLabel('naziv')); ?>:</b>
	<?php echo CHtml::encode($data->naziv); ?>
	<br />


</div>